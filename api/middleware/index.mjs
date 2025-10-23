export function checkBody(req, res, next) {
  const body = req.body;

  if (!body?.todo)
    res.status(400).json({
      success: false,
      error: "Invalid body",
    });

  next();
}

export function checkParams(req, res, next) {
  const id = req.params.id;
  console.log(`Param id: ${typeof id}`);

  if (!id)
    res.status(400).json({
      success: false,
      error: "No id in url",
    });

  next();
}
