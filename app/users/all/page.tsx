import ListUsers from './ListUsers'

export default async function Page() {

    return (
        <div className="m-4">
            <h1 className="text-lg font-bold">ユーザー一覧</h1>
            <ListUsers />
        </div>
    )
}
