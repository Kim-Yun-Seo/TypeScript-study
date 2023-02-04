{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;

  };
  function getVideo (id: string): Video {
    return {
      id: id,
      title: 'video',
      url: 'http://..',
      data: 'byte-data..'
    };
  }

  function getVideoMetaData (id: string) :Pick<Video, 'id' | 'title'> {
    //pick을 사용하면 기존의 타입에서 원하는 속성과 value만 가져와서
    //쏙 뽑아서 만들 수 있음.
    //이왕이면 새로 타입을 선언해서 만드는게 좋음.
    //예시) ===> type VideoMetadata = Pick<Video, 'id' | 'title'>
    return {
      id: id,
      title: 'title',
    };
  }
}