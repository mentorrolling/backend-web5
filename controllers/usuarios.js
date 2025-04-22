const getUsers = (req, res) => {
  const { limit, page } = req.query;
  res.status(200).json({
    message: "Petición GET de controlador",
    limit,
    page,
  });
};

const postUser = (req, res) => {
  const usuario = req.body;
  res.status(201).json({
    message: "Petición POST",
    usuario,
  });
};

const putUserId = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Petición PUT",
    id,
  });
};

const deleteUserId = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "Petición DELETE",
    id,
  });
};
export { getUsers, postUser, putUserId, deleteUserId };
