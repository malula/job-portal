import {
  Briefcase,
  Users,
  Zap,
  Eye,
  SmileIcon as Tooth,
  Heart,
  Umbrella,
  Clock,
  Calendar,
  Building,
  GraduationCap,
  Dumbbell,
  Brain,
  Home,
  Bitcoin,
  UserCircle,
  PieChart,
  Coins,
  MonitorOff,
  Shield,
  UserPlus,
} from "lucide-react";

interface Benefit {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const benefits: Benefit[] = [
  // { id: "401k", label: "401(k)", icon: <Briefcase className="w-3 h-3" /> },
  {
    id: "distributed",
    label: "Distributed team",
    icon: <Users className="w-3 h-3" />,
  },
  { id: "async", label: "Async", icon: <Zap className="w-3 h-3" /> },
  {
    id: "vision",
    label: "Vision insurance",
    icon: <Eye className="w-3 h-3" />,
  },
  {
    id: "dental",
    label: "Dental insurance",
    icon: <Tooth className="w-3 h-3" />,
  },
  {
    id: "medical",
    label: "Medical insurance",
    icon: <Heart className="w-3 h-3" />,
  },
  {
    id: "unlimited_vacation",
    label: "Unlimited vacation",
    icon: <Umbrella className="w-3 h-3" />,
  },
  { id: "pto", label: "Paid time off", icon: <Clock className="w-3 h-3" /> },
  {
    id: "four_day",
    label: "4 day workweek",
    icon: <Calendar className="w-3 h-3" />,
  },

  {
    id: "company_retreats",
    label: "Company retreats",
    icon: <Building className="w-3 h-3" />,
  },
  {
    id: "coworking_budget",
    label: "Coworking budget",
    icon: <Building className="w-3 h-3" />,
  },
  {
    id: "learning_budget",
    label: "Learning budget",
    icon: <GraduationCap className="w-3 h-3" />,
  },
  {
    id: "gym",
    label: "Free gym membership",
    icon: <Dumbbell className="w-3 h-3" />,
  },
  {
    id: "mental_wellness",
    label: "Mental wellness",
    icon: <Brain className="w-3 h-3" />,
  },
  {
    id: "home_office",
    label: "Home office budget",
    icon: <Home className="w-3 h-3" />,
  },
 
 
  {
    id: "profit_sharing",
    label: "Work from home",
    icon: <PieChart className="w-3 h-3" />,
  },
  {
    id: "equity",
    label: "Equity compensation",
    icon: <Coins className="w-3 h-3" />,
  },
 
  {
    id: "hire_old_young",
    label: "Young and Agile",
    icon: <UserPlus className="w-3 h-3" />,
  },
];
