import { Text, Image, TouchableOpacity } from 'react-native';
import cardStyle from './styles';
import { useRoute } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';

const MovieCard = ({ title, overview, popularity, release_date, id, backdrop_path, vote_count }) => {

    const imageURI = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    const test = useNavigation();

    return (
        <TouchableOpacity style={cardStyle.card} onPress={() =>
            test.navigate('MovieDetail', { params: { movie_id: id }})
          }>
            <Text style={cardStyle.text}>{title}</Text>
            <Image 
                source={{ uri: imageURI }}
                resizeMode='contain'
                height={100}
                width={150}
            />
            <Text>Votes: {vote_count}</Text>
            <Text>Date: {release_date}</Text>
        </TouchableOpacity>
    )
};

export default MovieCard;