import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  connections: string[];
}

interface NoteCardProps {
  note: Note;
  onEdit: (id: string) => void;
  onConnect: (id: string) => void;
}

const NoteCard = ({ note, onEdit, onConnect }: NoteCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">
            {note.title}
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onConnect(note.id)}
              className="hover:bg-purple-100"
            >
              <Icon name="Link" size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(note.id)}
              className="hover:bg-purple-100"
            >
              <Icon name="Edit" size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 font-merriweather">
          {note.content}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {note.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-purple-100 text-purple-800 hover:bg-purple-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={12} />
            <span>{note.createdAt.toLocaleDateString("ru-RU")}</span>
          </div>

          {note.connections.length > 0 && (
            <div className="flex items-center gap-1">
              <Icon name="GitBranch" size={12} />
              <span>{note.connections.length} связей</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
