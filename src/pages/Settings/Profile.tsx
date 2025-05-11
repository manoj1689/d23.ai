import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidEdit } from "react-icons/bi";
import { MdEditOff, MdEdit, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AppDispatch, RootState } from "../../store/store"; // Adjust path as needed
import { fetchUser, updateUser } from "@/store/slices/userSlice";

const ProfileCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: user, loading } = useSelector((state: RootState) => state.user);

    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({
        full_name: "",
        email: "",
        username: "",
        bio: "",
        profile_image: "",
    });

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    console.log("data of user", user)
    useEffect(() => {
        if (user) {
            setEditedProfile({
                full_name: user.full_name,
                email: user.email,
                username: user.username,
                bio: user.bio,
                profile_image: user.profile_image,
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedProfile({ ...editedProfile, profile_image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        dispatch(updateUser(editedProfile));
        setIsEditing(false);
    };

    if (loading || !user) return <div>Loading...</div>;

    return (
        <>
            <div className="bg-white shadow rounded p-4 mb-6 relative flex flex-col sm:flex-row gap-6">
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? <MdEditOff color="#A0AEC0" size={30} /> : <BiSolidEdit color="#63A7D4" size={30} />}
                </button>

                {/* Left: Profile Image */}
                <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <div className="relative items-center justify-center">
                        <img
                            src={editedProfile.profile_image || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-40 h-40 rounded-lg shadow-lg mx-auto object-cover"
                        />
                        {isEditing && (
                            <label className="flex gap-2 cursor-pointer text-gray-600 rounded-full bg-sky-200 items-center py-2 px-4 shadow-lg mt-4">
                                <MdEdit color="#63A7D4" size={20} /> <span>Upload</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                        )}
                    </div>
                </div>

                {/* Right: Profile Fields */}
                <div className="w-full sm:w-2/3 flex flex-col gap-4 mt-4 sm:mt-12">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="full_name"
                                value={editedProfile.full_name}
                                onChange={handleChange}
                                className="block w-full text-lg border border-gray-300 px-2 py-1 mb-2 rounded"
                                placeholder="Full Name"
                            />
                            <input
                                type="text"
                                name="username"
                                value={editedProfile.username}
                                onChange={handleChange}
                                className="block w-full text-sm border border-gray-300 px-2 py-1 mb-2 rounded"
                                placeholder="Username"
                            />
                            <input
                                type="email"
                                name="email"
                                value={editedProfile.email}
                                onChange={handleChange}
                                className="block w-full text-sm border border-gray-300 px-2 py-1 mb-2 rounded"
                                placeholder="Email"
                            />
                            <textarea
                                name="bio"
                                value={editedProfile.bio}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Bio"
                            />
                            <button
                                className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white px-4 py-2 rounded"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{user.full_name}</h2>
                                <p className="text-gray-600">@{user.username}</p>

                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="font-medium w-20">Email:</span>
                                        <span className="flex items-center gap-2 text-gray-600">
                                            <MdOutlineEmail size={18} /> {user.email}
                                        </span>
                                    </div>

                                    <div className="flex gap-2 text-sm text-gray-600">
                                        <span className="font-medium w-20">Status:</span>
                                        <span className={user.is_active ? "text-green-600" : "text-red-500"}>
                                            {user.is_active ? "Active" : "Inactive"}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-md font-semibold text-gray-700 mb-1">Bio</h3>
                                    <p className="text-gray-700 bg-gray-50 p-3 rounded shadow-sm text-sm">{user.bio || "No bio available."}</p>
                                </div>
                            </div>

                        </>
                    )}
                </div>
                <div>

                </div>

            </div>
            {/* Academic Interests */}
            <div className="bg-white shadow rounded p-4 mb-6">
                <h3 className="font-light text-lg mb-2">Academic Interests</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {(user.interests && user.interests.length > 0
                        ? user.interests
                        : [
                            'International Relations',
                            'Public Policy',
                            'Political Theory',
                            'Environmental Policy',
                            'Human Rights',
                            'Constitutional Law',
                            'Diplomacy',
                            'Global Economics',
                        ]
                    ).map((tag) => (
                        <span
                            key={tag}
                            className="bg-[#EFF6FF] text-sm font-[17px] px-3 py-1 text-[#2B6CB0] rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
            <div className="my-4 bg-white p-6">
                <h3 className="text-lg font-light text-gray-800 mb-2">Personalized Updates Settings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-md  text-gray-600">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={user.receive_product_updates} readOnly />
                        <label >Product Updates</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={user.receive_new_features} readOnly />
                        <label>New Features</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={user.receive_community_updates} readOnly />
                        <label>Community Updates</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={user.receive_marketing_emails} readOnly />
                        <label>Marketing Emails</label>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ProfileCard;
