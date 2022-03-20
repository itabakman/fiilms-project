import { Film } from "../models/index.js";

export class FilmController {
  async create(req, res) {
    try {
      const { name, slug, duration } = req.body;
      if (!name || !slug || !duration) {
        return res.status(400).send("Заполни по-человечески");
      }

      const film = await Film.create({ name, slug, duration });
      return res.json(film);
    } catch (e) {
      console.error(e.message);
      return res.status(500).send("Ошибка вышла");
    }
  }

  async get(req, res) {
    try {
      const { slug } = req.params;
      const film = await Film.findOne({
        where: { slug },
      });

      return res.json(film);
    } catch (e) {
      return e;
    }
  }

  async patch(req, res) {
    const { name, slug, duration } = req.body;

    await Film.update({ name, duration }, { where: { slug } });
    const film = await Film.findOne({ where: { slug } });

    return res.json(film);
  }

  async getAll(req, res) {
    const films = await Film.findAll();

    return res.json(films);
  }
}
