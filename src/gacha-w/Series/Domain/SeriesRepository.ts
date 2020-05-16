import Series from "@TogaBot/gacha-w/Series/Domain/Series";
import SeriesId from "@TogaBot/gacha-w/Shared/Domain/Series/SeriesId";

export default interface SeriesRepository {
  save(series: Series);
  find(seriesId: SeriesId): Series;
}