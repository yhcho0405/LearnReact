import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        setMovie(json.data.movie);
        console.log(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        medium_cover_image={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                </div>
            )}
        </div>
    );
}
export default Detail;
