import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles/styleSheet';
import MovieList from './MovieList';

const Home = () => {
    return (
        <View>
            <Text>List of Available Movies</Text>
            <MovieList />
        </View>
    )
};

export default Home