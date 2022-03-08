import { Photo } from '../types/photo';
import { storage } from '../libs/Firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';

import { v4 as createId } from 'uuid';

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

export const insert = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoURL = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoURL } as Photo;

    } else { return new Error('Tipo de Arquivo não permitido!'); }
}