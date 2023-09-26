import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import useFetch from '../../hook/fetchData';
import MovieCard from '../MovieCard';

const MovieList = () => {

    const { data } = useFetch();

    return (
        <ScrollView>
            {data.map(({ title, release_date, id, backdrop_path, vote_count }) => {
                return (
                    <MovieCard
                        key={id}
                        id={id}
                        title={title}
                        vote_count={vote_count}
                        release_date={release_date} 
                        backdrop_path={backdrop_path}
                        />
                )
            })}
        </ScrollView>
    )
}

export default MovieList;