const bdUsers = ["Filippo", "Fábio", "Guilherme", "Erik"];

class UserController {
  async index(req, res) {
    return res.json({
      data: {
        users: bdUsers,
        maxUsers: bdUsers.length
      }
    });
  }

  async store(req, res) {
    const user = req.params.user;

    bdUsers.push(user);

    return res.json({
      data: {
        users: bdUsers,
        maxUsers: bdUsers.length
      }
    });
  }

  async getUser(req, res) {
    const user = req.params.user;

    const index = bdUsers.indexOf(user);

    if (index < 0) {
      return res.status(404).json({
        message: {
          error: "User not found"
        }
      });
    }

    return res.json({
      data: {
        user: bdUsers[index]
      }
    });
  }

  async update(req, res) {
    const user = req.params.user;
    const { newUser } = req.body;

    const index = bdUsers.indexOf(user);

    if (index < 0) {
      return res.status(404).json({
        message: {
          error: "User not found"
        }
      });
    }

    bdUsers[index] = newUser;

    return res.json({
      data: {
        users: bdUsers,
        maxUsers: bdUsers.length
      }
    });
  }

  async delete(req, res) {
    const user = req.params.user;

    const index = bdUsers.indexOf(user);

    if (index < 0) {
      return res.status(404).json({
        message: {
          error: "User not found"
        }
      });
    }

    bdUsers.splice(index, 1);

    return res.json({
      data: {
        users: bdUsers,
        maxUsers: bdUsers.length
      }
    });
  }
}

export default new UserController();
