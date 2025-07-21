
interface Props {
    searchUsersCount: number;
    totalUsersCount: number;
}

function UserListCount({searchUsersCount,totalUsersCount}:Props) {
    return (
        <div className="UserListCount">
            <span>{searchUsersCount} / <b>{totalUsersCount}</b></span>
        </div>
    );
}

export default UserListCount;