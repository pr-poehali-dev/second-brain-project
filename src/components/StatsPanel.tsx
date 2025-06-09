import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StatsPanelProps {
  totalNotes: number;
  totalTags: number;
  totalConnections: number;
  recentActivity: number;
}

const StatsPanel = ({
  totalNotes,
  totalTags,
  totalConnections,
  recentActivity,
}: StatsPanelProps) => {
  const stats = [
    {
      title: "Всего заметок",
      value: totalNotes,
      icon: "FileText",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Активных тегов",
      value: totalTags,
      icon: "Tag",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Связей",
      value: totalConnections,
      icon: "GitBranch",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "За неделю",
      value: recentActivity,
      icon: "TrendingUp",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <Icon
                  name={stat.icon as any}
                  size={20}
                  className={stat.color}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsPanel;
