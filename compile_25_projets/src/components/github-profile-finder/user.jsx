export default function User({ user }) {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        url,
        name,
        login,
        created_at,
    } = user;

    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>

            <div className="name-container">
                <a href="`https://github.com/${login}`">{name || login}</a>

                <p>
                    A rejoint github le:{" "}
                    {`${createdDate.getDate()} ${createdDate.toLocaleString(
                        "fr-FR",
                        { month: "short" }
                    )} ${createdDate.getFullYear()}`}
                </p>
            </div>
            <div className="profile-info">
                <div>
                    <p>Nbre de repositorie public:</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Nbre de followers:</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Nbre de following:</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    );
}
