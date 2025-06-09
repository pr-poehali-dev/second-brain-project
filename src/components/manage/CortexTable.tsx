
import React, { useState } from 'react';
import { Search, Filter, Plus, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TableView from './views/TableView';
import GridView from './views/GridView';
import ListView from './views/ListView';
import KanbanView from './views/KanbanView';
import { cortexItems } from './cortex-data';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

interface CortexTableProps {
  viewType?: 'table' | 'grid' | 'list' | 'kanban';
  categoryId?: string;
  cortexId?: string | null;
}

const CortexTable = ({ viewType = 'table', categoryId = 'private', cortexId = 'overview' }: CortexTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [moveDialogOpen, setMoveDialogOpen] = useState(false);
  const [targetCortex, setTargetCortex] = useState<string>('');
  
  const getActiveCortexName = () => {
    const categories = [
      {
        id: 'shared',
        items: [
          { id: 'shared-1', name: 'Второй Мозг' },
          { id: 'shared-2', name: 'OSS' },
          { id: 'shared-3', name: 'Искусственный Интеллект' },
        ]
      },
      {
        id: 'team',
        items: [
          { id: 'team-1', name: 'Конкуренты Brainboard' },
          { id: 'team-2', name: 'Визуализировать Terraform' },
          { id: 'team-3', name: 'Движок CI/CD' },
        ]
      },
      {
        id: 'private',
        items: [
          { id: 'overview', name: 'Обзор' },
          { id: 'private-1', name: 'UX/UI' },
          { id: 'private-2', name: 'Космос' },
          { id: 'private-3', name: 'Облачные Вычисления' },
        ]
      }
    ];
    
    if (cortexId === null) {
      return "Все";
    }
    
    const category = categories.find(c => c.id === categoryId);
    if (!category) return "Неизвестно";
    
    const item = category.items.find(i => i.id === cortexId);
    return item ? item.name : "Неизвестно";
  };
  
  const getFilteredItems = () => {
    const activeCortexName = getActiveCortexName().toLowerCase();
    
    if (cortexId === 'overview') {
      return searchQuery 
        ? cortexItems.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
            item.writer.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : cortexItems;
    }
    
    let cortexFiltered = cortexItems.filter(item => 
      item.keywords.some(keyword => keyword.toLowerCase() === activeCortexName.toLowerCase())
    );
    
    if (cortexFiltered.length === 0) {
      cortexFiltered = cortexItems.filter(item => 
        item.keywords.some(keyword => keyword.toLowerCase().includes(activeCortexName.toLowerCase())) ||
        item.title.toLowerCase().includes(activeCortexName.toLowerCase())
      );
    }
    
    return searchQuery 
      ? cortexFiltered.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
          item.writer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : cortexFiltered;
  };
  
  const filteredItems = getFilteredItems();

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleMoveItems = () => {
    if (!targetCortex) return;
    
    toast.success(`Перемещено ${selectedItems.length} элементов в ${targetCortex}`);
    setSelectedItems([]);
    setMoveDialogOpen(false);
    setTargetCortex('');
  };

  const cortexOptions = [
    { id: 'shared-1', name: 'Второй Мозг' },
    { id: 'shared-2', name: 'OSS' },
    { id: 'shared-3', name: 'Искусственный Интеллект' },
    { id: 'team-1', name: 'Конкуренты Brainboard' },
    { id: 'team-2', name: 'Визуализировать Terraform' },
    { id: 'team-3', name: 'Движок CI/CD' },
    { id: 'private-1', name: 'UX/UI' },
    { id: 'private-2', name: 'Космос' },
    { id: 'private-3', name: 'Облачные Вычисления' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Поиск разделов мозга..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {selectedItems.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => setMoveDialogOpen(true)}>
              <Move size={16} className="mr-2" />
              Переместить ({selectedItems.length})
            </Button>
          )}
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Фильтр
          </Button>
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            Новый Раздел
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <p>Элементы для этого раздела мозга не найдены.</p>
          </div>
        ) : (
          <>
            {viewType === 'table' && (
              <TableView 
                items={filteredItems} 
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'grid' && (
              <GridView 
                items={filteredItems}
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'list' && (
              <ListView 
                items={filteredItems}
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'kanban' && <KanbanView items={filteredItems} />}
          </>
        )}
      </div>

      <Dialog open={moveDialogOpen} onOpenChange={setMoveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Переместить в Раздел Мозга</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Select onValueChange={setTargetCortex} value={targetCortex}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите целевой раздел" />
              </SelectTrigger>
              <SelectContent>
                {cortexOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMoveDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleMoveItems} disabled={!targetCortex}>
              Переместить Элементы
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CortexTable;
