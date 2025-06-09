import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTags: string[];
  availableTags: string[];
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

const SearchBar = ({
  searchQuery,
  onSearchChange,
  selectedTags,
  availableTags,
  onTagToggle,
  onClearFilters,
}: SearchBarProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Icon
          name="Search"
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <Input
          placeholder="Поиск по заметкам..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 text-base border-2 focus:border-purple-500"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <Icon name="X" size={16} />
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-gray-600">Теги:</span>

        {availableTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className={`cursor-pointer hover:scale-105 transition-transform ${
              selectedTags.includes(tag)
                ? "bg-purple-500 hover:bg-purple-600"
                : "hover:bg-purple-100 hover:border-purple-300"
            }`}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </Badge>
        ))}

        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-red-500 hover:text-red-600"
          >
            <Icon name="FilterX" size={16} />
            Сбросить
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
