import { View, Text, Image, TouchableOpacity, Button } from "react-native"
import { useRoute } from '@react-navigation/native';
import fetchDetailData from "../../hook/fetchMovieDetails";
import { useEffect, useState } from "react";

const MovieDetail = () => {
    
    const router = useRoute();
    const paramId = router.params.id;

    const [movieDetail, setMovieDetail] = useState();
    const [casting, setCasting] = useState([]);

    useEffect(() => {
        const { movieData, actorData } = fetchDetailData(paramId);

        if (movieData) {
            setMovieDetail(movieData);
        }
        if (actorData) {
            setCasting(actorData)
        }
    }, []);

    const { genres, original_Title, poster_path, release_date, vote_average } = movieDetail;

    const imageURI = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <View>
            <Text>Movie Detail</Text>
            <View>
                <Text>{original_Title}</Text>
                <Image 
                    source={{ uri: imageURI }}
                    resizeMode='contain'
                    height={150}
                    width={200}
                />
                <View>
                   Genre: {genres.map(({ name }) => {
                        return (
                            <Text>
                                {name}
                            </Text>
                        )
                    })}
                </View>
                <View>
                    Premiere: <Text>{release_date}</Text>
                </View>
                <View>
                    Average Score: <Text>{vote_average}</Text>
                </View>

                <View>
                    {casting.map(({cast_id, name, character}) => {
                        return (
                            <View key={cast_id}>
                                <Text>Actor: {name} </Text>
                                <Text>Character: {character} </Text>
                            </View>
                        )
                    })}
                </View>
            </View>
            <Button onPress={() => addRating(paramId)}>Add Rating</Button>
        </View>
    )
};

export default MovieDetail;