import { Photo } from '../types/photo';
import { storage } from '../libs/Firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

// pegar todas as fotos no firebase
export const getAll = async () => {
    let list: Photo[] = [];

    const imageFolder = ref(storage, "images");
    const photoList = await listAll(imageFolder);

    for(let i in photoList.items) {

        //gerar URL
        let photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}