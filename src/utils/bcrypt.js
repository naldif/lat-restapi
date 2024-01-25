import bcrypt from "bcrypt";
const saltRound = 10;

const encript = (password) => {
    return bcrypt.hashSync(password, saltRound);
};

const compare=(password,hash)=>{
    return bcrypt.compareSync(password, hash);
};

export {encript, compare};