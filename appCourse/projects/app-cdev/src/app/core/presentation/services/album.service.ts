export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export class AlbumService {
  async getAlbums(): Promise<IAlbum[]> {
    return fetch('https://jsonplaceholder.typicode.com/albums').then(
      (response) => response.json()
    );
  }
}
