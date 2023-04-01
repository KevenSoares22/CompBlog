import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  //  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="introdution">Crie seu Post</h1>

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

        <button className="btn">Cadastrar</button>
      </form>
    </>
  );
};

export default CreatePost;
