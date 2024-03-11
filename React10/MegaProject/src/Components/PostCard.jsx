import React from 'react';
import service from '../AppWrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, post }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full p-4 bg-gray-100 rounded-xl shadow-md">
                <div className="w-full justify-center mb-4">
                    <img
                        src={service.getFilePreview(post.Image)}
                        alt={post.Title}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <h2 className="mt-4 text-2xl font-semibold">
                        {post.Title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
