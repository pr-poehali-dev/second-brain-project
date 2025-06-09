import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import NoteCard from "@/components/NoteCard";
import SearchBar from "@/components/SearchBar";
import NoteEditor from "@/components/NoteEditor";
import StatsPanel from "@/components/StatsPanel";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  connections: string[];
}

const Index = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Методология Building a Second Brain",
      content:
        "Система персонального управления знаниями, разработанная Тиаго Форте. Основывается на принципах CODE: Capture, Organize, Distill, Express.",
      tags: ["продуктивность", "обучение", "система"],
      createdAt: new Date("2024-01-15"),
      connections: ["2"],
    },
    {
      id: "2",
      title: "Принцип Zettelkasten",
      content:
        "Метод ведения заметок, при котором каждая заметка содержит одну идею и связывается с другими заметками через уникальные идентификаторы.",
      tags: ["заметки", "система", "исследования"],
      createdAt: new Date("2024-01-20"),
      connections: ["1", "3"],
    },
    {
      id: "3",
      title: "Эффект сетевого мышления",
      content:
        "Когда идеи связаны между собой, возникают новые инсайты и понимание. Чем больше связей, тем богаче контекст для размышлений.",
      tags: ["мышление", "связи", "инсайты"],
      createdAt: new Date("2024-01-25"),
      connections: ["2"],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingNote, setEditingNote] = useState<string | null>(null);

  // Вычисляем доступные теги
  const availableTags = useMemo(() => {
    const allTags = notes.flatMap((note) => note.tags);
    return Array.from(new Set(allTags));
  }, [notes]);

  // Фильтруем заметки
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSearch =
        searchQuery === "" ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => note.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [notes, searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSaveNote = (noteData: {
    title: string;
    content: string;
    tags: string[];
  }) => {
    if (editingNote) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNote ? { ...note, ...noteData } : note,
        ),
      );
      setEditingNote(null);
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        ...noteData,
        createdAt: new Date(),
        connections: [],
      };
      setNotes((prev) => [newNote, ...prev]);
    }
    setShowEditor(false);
  };

  const handleEditNote = (id: string) => {
    setEditingNote(id);
    setShowEditor(true);
  };

  const totalConnections = notes.reduce(
    (sum, note) => sum + note.connections.length,
    0,
  );
  const recentActivity = notes.filter((note) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return note.createdAt >= weekAgo;
  }).length;

  if (showEditor) {
    const noteToEdit = editingNote
      ? notes.find((n) => n.id === editingNote)
      : undefined;
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <NoteEditor
            onSave={handleSaveNote}
            onCancel={() => {
              setShowEditor(false);
              setEditingNote(null);
            }}
            initialNote={noteToEdit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🧠 Второй мозг
            </h1>
            <p className="text-gray-600">
              Персональная система управления знаниями
            </p>
          </div>

          <Button
            onClick={() => setShowEditor(true)}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Новая заметка
          </Button>
        </div>

        {/* Stats */}
        <StatsPanel
          totalNotes={notes.length}
          totalTags={availableTags.length}
          totalConnections={totalConnections}
          recentActivity={recentActivity}
        />

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTags={selectedTags}
            availableTags={availableTags}
            onTagToggle={handleTagToggle}
            onClearFilters={() => {
              setSearchQuery("");
              setSelectedTags([]);
            }}
          />
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              name="FileText"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchQuery || selectedTags.length > 0
                ? "Заметки не найдены"
                : "Пока нет заметок"}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchQuery || selectedTags.length > 0
                ? "Попробуйте изменить поисковый запрос или фильтры"
                : "Создайте первую заметку для вашего второго мозга"}
            </p>
            {!(searchQuery || selectedTags.length > 0) && (
              <Button
                onClick={() => setShowEditor(true)}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Создать заметку
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={handleEditNote}
                onConnect={(id) => console.log("Connect note:", id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
