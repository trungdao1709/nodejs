import axios from "axios"
export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get(` http://localhost:3001/users`);
        if (users.length === 0) {
            res.send({
                messenger: "Danh sách sản phẩm trống!",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
}
export const getDetail = async (req, res) => {
    try {
        const { data: allUsers } = await axios.get(` http://localhost:3001/users`)
        const userIndex = allUsers.findIndex(user => +user.id === +req.params.id) 
        if(userIndex === -1){
            return res.status(500).json({
                messenger:'Khong tim thay'
            })
        }
        const { data: users } = await axios.get(` http://localhost:3001/users/${req.params.id}`)
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: 'error',
        });
    }

}
export const create = async (req, res) => {
    try {
        const { data: users } = await axios.post(` http://localhost:3001/users`, {
            name: req.body.name,
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
        })
        if (!users) {
            res.send({
                messenger: " sản phẩm that bai!",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
}
export const update = async (req, res) => {
    try {
        const { data: allUsers } = await axios.get(` http://localhost:3001/users`)
        const userIndex = allUsers.findIndex(user => +user.id === +req.params.id) 
        if(userIndex === -1){
            return res.status(500).json({
                messenger:'Khong tim thay'
            })
        }
        const { data: users } = await axios.put(` http://localhost:3001/users/${req.params.id}`, {
            name: req.body.name,
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone
        })
        if (!users) {
            res.send({
                messenger: " sản phẩm trống!",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }

}
export const patch = async (req, res) => {
    try {
        const { data: allUsers } = await axios.get(`http://localhost:3001/users`)
        const userIndex = allUsers.findIndex(user => +user.id === +req.params.id) 
        console.log(userIndex)
        if(userIndex === -1){
            return res.status(500).json({
                messenger:'Khong tim thay'
            })
        }
        console.log(allUsers);
        const oldData = allUsers.filter(user => +user.id === +req.params.id)[0]
        // console.log(oldData);
        const { data: users } = await axios.patch(`http://localhost:3001/users/${req.params.id}`, {
            ...oldData,
            ...req.body
        })
        if (!users) {
            res.send({
                messenger: " sản phẩm trống!",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }

}
export const remove = async (req, res) => {
    try {
        const { data: allUsers } = await axios.get(` http://localhost:3001/users`)
        const userIndex = allUsers.findIndex(user => +user.id === +req.params.id) 
        if(userIndex === -1){
            return res.status(500).json({
                messenger:'Khong tim thay'
            })
        }
        await axios.delete(` http://localhost:3001/users/${req.params.id}`);
        return res.send({
            messenger: "Xoá sản phẩm thành công!",
        });
    } catch (error) {
        res.send({
            messenger: error,
        });
    }
}