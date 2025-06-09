
import { UserCasesData, Book } from './UseCasesTypes';

export const userCasesData: UserCasesData = {
  Marketers: {
    title: 'Сохраняйте и находите цитаты и выделения',
    subtitle: 'которые вас вдохновляют.',
    description: "природная сцена теперь ощущается как стимуляция. Мы перегружены цифровыми изображениями. Интернет доставил нам мир на серебряном блюде - от ледниковых пейзажей Гренландии до трещин, выстилающих пустыню Сахара. Мы видели глубокий океан, микроскопические бактерии, внутренности наших собственных тел.",
    quote: "Истинные изменения внутри.",
    background: 'bg-[#ff4d3c]',
    textColor: 'text-white',
    ctaText: 'СОХРАНИТЬ В МОЙ РАЗУМ'
  },
  Designers: {
    title: 'Создавайте мгновенные, безграничные',
    subtitle: 'визуальные мудборды.',
    description: '',
    quote: '',
    background: 'bg-[#d8ede7]',
    textColor: 'text-white',
    ctaText: '',
    showImageGrid: true
  },
  Writers: {
    title: 'Пишите без',
    subtitle: 'отвлечений.',
    description: '',
    quote: '',
    background: 'bg-[#f7c2d2]',
    textColor: 'text-white',
    ctaText: 'ДОБАВИТЬ НОВУЮ ЗАМЕТКУ',
    showNotepad: true
  },
  Researchers: {
    title: 'Собирайте все свои исследования и',
    subtitle: 'ссылки в одном месте.',
    description: '',
    quote: '',
    background: 'bg-[#e8f4f8]',
    textColor: 'text-white',
    ctaText: '',
    showBrain: true
  },
  Developers: {
    title: 'Ваш личный',
    subtitle: 'ресурсный и справочный центр.',
    description: '',
    quote: '',
    background: 'bg-[#1a1f2c]',
    textColor: 'text-white',
    ctaText: '',
    showDevTools: true
  },
  Everyone: {
    title: 'Место для всего,',
    subtitle: 'что вы хотите запомнить.',
    description: '',
    quote: '',
    background: 'bg-[#e8ecf0]',
    textColor: 'text-white',
    ctaText: '',
    showTags: true
  }
};

export const booksData: Book[] = [{
  title: "Творческий разум",
  author: "Мария Иванова",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}, {
  title: "Паттерны дизайна",
  author: "Алексей Петров",
  coverColor: "bg-[#8b5cf6]",
  textColor: "text-white"
}, {
  title: "Искусство концентрации",
  author: "Анна Смирнова",
  coverColor: "bg-[#0ea5e9]",
  textColor: "text-white"
}, {
  title: "Цифровой минимализм",
  author: "Кэл Ньюпорт",
  coverColor: "bg-[#d946ef]",
  textColor: "text-white"
}, {
  title: "Атомные привычки",
  author: "Джеймс Клир",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}];
