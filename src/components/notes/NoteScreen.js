import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    className="notes_title-input"
                    type="text"
                    placeholder="Some awesome title"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes_textarea">
                </textarea>
                <div className="notes__images">
                    <img src="https://www.iekakmi-roadtrips.gr/plugins/fullpage/examples/imgs/bg2.jpg" alt="imagen" />
                </div>
            </div>
        </div>
    );
};
