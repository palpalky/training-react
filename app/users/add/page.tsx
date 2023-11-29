import AddUser from './AddUser'

export default async function Page() {

    return (
        <div className="m-4">
            <h1 className="text-lg font-bold">ユーザー追加</h1>
            <AddUser />
        </div>
    )
}
