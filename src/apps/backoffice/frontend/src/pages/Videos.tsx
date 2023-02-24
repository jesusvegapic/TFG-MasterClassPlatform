import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import NewVideoForm from '../components/NewVideoForm';
import PageContainer from '../components/page-container/PageContainer';
import { Video } from '../services/videos';

function Videos() {
  const [alert, setAlert] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSuccess = (video: Video) => {
    setVideos([...videos, { ...video }]);
    setAlert(`Felicidades, el video ${video.id} ha sido creado correctamente!`);
  };

  return (
    <div className="container mx-auto px-4 p-5">
      <Helmet>
        <title>Aletheia| Videos</title>
      </Helmet>

      <PageContainer title="videos" alert={alert}>
        <NewVideoForm
          onSuccess={handleSuccess}
          onError={() => setAlert('Lo siento, ha ocurrido un error al crear el video')}
        />
      </PageContainer>
    </div>
  );
}

export default Videos;