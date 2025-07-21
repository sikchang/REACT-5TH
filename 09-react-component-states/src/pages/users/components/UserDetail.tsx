import type { UserType } from "../types/user";

interface Props {
    user: UserType
}

const S = {color:'inherit', textDecoration:'none'};

function UserDetail({user}:Props) {
    return (
        <span>
            <li key={user.id}>
                <strong>{user.name}</strong>
                {' '}
                -
                {' '}
                <a style={S} href={`mailto:${user.email}`}>
                    {user.email} ({user.province})
                </a>
            </li>
        </span>
    );
}

export default UserDetail;