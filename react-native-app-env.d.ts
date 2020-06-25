/// <reference types="react-native" />

interface Post {
  id: string;
  title: string;
  body: string;
  comments: Comment[];
  author: string;
}

type Author = {
  id: string;
  username: string;
};

interface Comment {
  id: string;
  body: string;
  post: string;
  author: string;
}

interface CommentProps extends Comment {
  onUserScreen: () => void;
}

interface RequestedData {
  [key: string]: string | Object<string>;
}

type RequestedConfig = {
  headers: { 'Content-Type': string };
  method: string;
  body?: string;
}

type AppTextProps = {
  children: ReactNode;
  onPress?: () => void;
  style?: { [key: string]: string | number }
};

type AppTextBoldProps = {
  children: ReactNode;
  onPress?: () => void;
  style?: { [key: string]: string | number }
};

type AppCommentsBtnProps = {
  children: ReactNode;
  onPress?: () => void;
}

type AppButtonProps = {
  children: ReactNode;
  onPress: () => void;
  bgColor?: string;
  color?: string;
}
