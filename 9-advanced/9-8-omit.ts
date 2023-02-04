{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data' | 'hello'>;
  //Omit은 원하는 것을 빼서 사용할 수 있음
  //pick과 다르게 인자로 원래 video 에 없는 것도 사용 가능.

  function getVideo2 (id: string): Video {
    return {
      id: id,
      title: 'video',
      url: 'http://..',
      data: 'byte-data..'
    };
  }

  function getVideoMetaData2 (id: string) :VideoMetadata {
    
    return {
      id: id,
      title: 'title',
    };
  }
}