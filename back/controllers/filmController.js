import { Film } from "../models/index.js";
import { checkObjectFields } from "../helpers/index.js";
import slugify from "slugify";

export class FilmController {
  async create(req, res) {
    try {
      const newFilm = req.body;

      if (!checkObjectFields(req.body)) {
        return res.status(400).send("Заполни по-человечески");
      }

      const slug = slugify(newFilm.name, {
        locale: "ru",
        lower: true,
      });

      const film = await Film.create({ ...newFilm, slug });

      return res.status(200).json(film);
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

      return res.status(200).json(film);
    } catch (e) {
      return e;
    }
  }

  async patch(req, res) {
    try {
      const { slug, ...props } = req.body;

      await Film.update({ ...props }, { where: { slug } });
      const film = await Film.findOne({ where: { slug } });

      return res.status(200).json(film);
    } catch (e) {
      return res.status(400).send("Изменение не удалось");
    }
  }

  async getAll(req, res) {
    try {
      const films = await Film.findAll();

      return res.status(200).json(films);
    } catch (e) {
      return res.status(400).send("Не удалось получить все фильмы");
    }
  }

  async delete(req, res) {
    try {
      const { slug } = req.params;
      if (slug) {
        await Film.destroy({ where: { slug } });
      }

      return res.status(200).send("Успешно удалено");
    } catch (e) {
      return res.status(400).send("Удаление не удалось");
    }
  }
}
