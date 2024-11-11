export default function ColorDemo() {
    return (
        <div className="space-y-4 p-4">
            {/* Primary Button Example */}
            <div className="space-y-2">
                <p className="text-sm font-medium">Primary Button:</p>
                <button
                    className="px-4 py-2 rounded-md"
                    style={{
                        backgroundColor: 'hsl(215, 51%, 56%)', // --primary
                        color: 'hsl(215, 25%, 12%)'  // --primary-foreground
                    }}
                >
                    Primary Button Text
                </button>
            </div>

            {/* Secondary Section Example */}
            <div className="space-y-2">
                <p className="text-sm font-medium">Secondary Section:</p>
                <div
                    className="p-4 rounded-md"
                    style={{
                        backgroundColor: 'hsl(215, 25%, 16%)', // --secondary
                        color: 'hsl(0, 0%, 98%)'  // --secondary-foreground
                    }}
                >
                    Secondary Section Content
                </div>
            </div>

            {/* Color Swatches */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <p className="text-sm font-medium">Primary Colors:</p>
                    <div className="flex gap-2">
                        <div
                            className="w-16 h-16 rounded-md border"
                            style={{ backgroundColor: 'hsl(215, 51%, 56%)' }}
                            title="--primary"
                        />
                        <div
                            className="w-16 h-16 rounded-md border"
                            style={{ backgroundColor: 'hsl(215, 25%, 12%)' }}
                            title="--primary-foreground"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium">Secondary Colors:</p>
                    <div className="flex gap-2">
                        <div
                            className="w-16 h-16 rounded-md border"
                            style={{ backgroundColor: 'hsl(215, 25%, 16%)' }}
                            title="--secondary"
                        />
                        <div
                            className="w-16 h-16 rounded-md border"
                            style={{ backgroundColor: 'hsl(0, 0%, 98%)' }}
                            title="--secondary-foreground"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
