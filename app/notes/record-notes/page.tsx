export default function RecordNotes(){
    return (
        <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Record Notes</h1>
        <p className="text-muted-foreground">
            This is a simple page to record notes.
        </p>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        </div>
    )
}