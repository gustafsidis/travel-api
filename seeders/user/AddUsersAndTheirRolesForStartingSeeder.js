const bcrypt = require('bcryptjs')
const models = require('../../models')
const Role = models.Role
const User = models.User

exports.addUsersAndTheirRolesForStartingSeeder = async () => {
    const roles = await Role.bulkCreate([
        {
            nama: 'Admin'
        },
        {
            nama: 'PM'
        },
        {
            nama: 'User'
        }
    ])

    const user = await User.create({
        name: 'Admin Dengan Semua Roles',
        email: 'admin@example.com',
        password: bcrypt.hashSync('admin', 10)
    })
    await user.setRoles(roles).then(() => {
        console.log('User dengan semua roles berhasil ditambahkan')
    })
}