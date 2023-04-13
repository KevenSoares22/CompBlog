import React, { useEffect, useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetch('posts', id);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');
  const { insertDocument, response } = useInsertDocument('posts');
  const { user } = useAuthValue();

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);

      setImage(post.image);

      const tagsArray = post.tagsList.join(', ');
      setTags(tagsArray);
    }
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL');
    }
    if (!title || !image || !body || !tags) {
      setFormError('Preencha todos os campos');
    }

    if (formError) return;
    const tagsList = tags.split(',').map((tag) => tag.trim().toLowerCase());
    insertDocument({ title, image, body, tagsList, uid: user.uid, createBy: user.displayName });

    navigate('/');
  };

  return (
    <div>
      {post && (
        <>
          <h1 className="introdution">Edite seu Post</h1>

          <form onSubmit={handleSubmit}>
            <label>
              <span>Titulo</span>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Escolha um bom titulo"
                required
              />
            </label>
            <label>
              <span>Imagem</span>
              <input
                type="text"
                name="imagem"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Insira a URL da Imagem"
                required
              />
            </label>
            <label>
              <span>Conteudo</span>
              <input
                type="text"
                name="conteudo"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Insira o conteudo"
                required
              />
            </label>
            <label>
              <span>Tags</span>
              <input
                type="text"
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Insira as tags separadas por virgula"
                required
              />
            </label>

            {response.loading && (
              <button className="btn" disabled>
                Aguarde
              </button>
            )}
            {!response.loading && (
              <button type="submit" className="btn">
                Salvar
              </button>
            )}
            {(response.error || formError) && <p className="error">{response.error || formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
