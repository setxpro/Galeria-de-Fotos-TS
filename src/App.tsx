import { useState, useEffect, FormEvent } from 'react';
import * as C from './styles/GlobalStyles';
import * as Photos from './services/photos';
import { Photo } from './types/photo';
import { PhotoItem } from './components/PhotoItem';

export const App = () => {

  const [loading, setLoading] = useState(false); // Carregando ou não
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [upLoading, setUpLoading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());

      setLoading(false);
    }

    getPhotos();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File; // campo image

        if (file && file.size > 0) {
            setUpLoading(true);
            let result = await Photos.insert(file);
            setUpLoading(false);

            if (result instanceof Error) {
                alert(`${result.name} - ${result.message}`);
            }
            else {
                let newPhotoList = [...photos];
                newPhotoList.push(result);
                setPhotos(newPhotoList);
            }
        }
    }

  return (
    <C.Container>    
    <C.GobalStyles/>
    
    <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

         {/* Upload */}
          <C.UploadForm method="POST" onSubmit={handleSubmit}>
            <input 
                type="file" 
                name="image" />
            <input 
                type="submit" 
                value="Enviar" />
                {upLoading && 
                  <div className="lds-hourglass"></div>
                }
          </C.UploadForm>

     {loading &&
      <C.ScreenWarning>
          <div className='emoji'>✋</div>
          <div>Carregando...</div>
      </C.ScreenWarning>
     }

     {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item, index) => (
             <PhotoItem key={index} 
              url={item.url}
              name={item.name}
             />
          ))}

         
        </C.PhotoList>
     }

     {!loading && photos.length === 0 &&
      <C.ScreenWarning>
          <div className='emoji'>🚩</div>
          <div>Não há Fotos cadastradas...</div>
      </C.ScreenWarning>
     }

    </C.Area>
    </C.Container>

  );
}