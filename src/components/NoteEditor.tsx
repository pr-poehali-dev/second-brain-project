import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface NoteEditorProps {
  onSave: (note: { title: string; content: string; tags: string[] }) => void;
  onCancel: () => void;
  initialNote?: {
    title: string;
    content: string;
    tags: string[];
  };
}

const NoteEditor = ({ onSave, onCancel, initialNote }: NoteEditorProps) => {
  const [title, setTitle] = useState(initialNote?.title || "");
  const [content, setContent] = useState(initialNote?.content || "");
  const [tags, setTags] = useState<string[]>(initialNote?.tags || []);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      onSave({ title: title.trim(), content: content.trim(), tags });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="PenTool" size={20} className="text-purple-600" />
          {initialNote ? "Редактировать заметку" : "Новая заметка"}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <Input
            placeholder="Заголовок заметки..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-semibold border-2 focus:border-purple-500"
          />
        </div>

        <div>
          <Textarea
            placeholder="Содержание заметки..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-32 font-merriweather border-2 focus:border-purple-500 resize-none"
            rows={6}
          />
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Добавить тег..."
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
              className="flex-1"
            />
            <Button onClick={handleAddTag} variant="outline">
              <Icon name="Plus" size={16} />
            </Button>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                >
                  {tag}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 h-4 w-4 p-0 hover:bg-purple-300"
                  >
                    <Icon name="X" size={12} />
                  </Button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleSave}
            disabled={!title.trim() || !content.trim()}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить
          </Button>
          <Button variant="outline" onClick={onCancel}>
            <Icon name="X" size={16} className="mr-2" />
            Отмена
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteEditor;
