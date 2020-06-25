import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Profile: { author: string };
    Post: { postId: string };
};

export type MainScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export type ProfileScreenProps = StackScreenProps<RootStackParamList, 'Profile'>;

type PostScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;

export type PostScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Post'
    >;

export type PostScreenProps = {
    route: PostScreenRouteProp;
    navigation: PostScreenNavigationProp;
};
