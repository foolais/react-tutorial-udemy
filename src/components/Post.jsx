/* eslint-disable react/prop-types */
function Post(props) {
  const { author, body } = props;

  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}

export default Post;
