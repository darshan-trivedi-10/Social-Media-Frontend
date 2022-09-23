import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { gerUserbyUsername } from "../../../../../Api/userRequest";
import FollowersCard from "../FollowersCard";
import '../FollowersCard.css'
import User from "../user/User";

function FollowersModel({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();
    const [username, setUsername] = useState('');
    const [find, setFind] = useState(false);
    const [user, setUser] = useState(null);

    const findUser = async (e) => {
        e.preventDefault();
        const res = await gerUserbyUsername(username);
        const userData = res.data;
        setUser(userData);
        setFind(true)
    }

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="80%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <div className="userSearch">
                <input type='text' value={username} onChange={(e) => { setUsername(e.target.value); setFind(false) }} placeholder="Enter Your Friend Username to Find" />
                <button className="button" onClick={findUser}>
                    Search
                </button>
            </div>
            {
                find ? (typeof user) === "string" ?
                    <center><h2>"Please Enter Correct UserName"</h2></center> :
                    <User userData={user} key={user._id} /> :
                    <FollowersCard tag={false} />
            }
        </Modal>
    );
}

export default FollowersModel;