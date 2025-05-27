const PreviouNotes = ()=> {
    return (
        <div className=" max-w-4xl mx-auto flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Previous Notes</h2>
            <div className="flex flex-col gap-2">
                <div className="bg-gray-100 p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold">Note Title</h3>
                    <p className="text-gray-700">This is a sample note content.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold">Note Title</h3>
                    <p className="text-gray-700">This is a sample note content.</p>
                </div>
            </div>
        </div>
    );
}
export default PreviouNotes;