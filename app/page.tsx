import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardContent>
            <h1 className="text-2xl font-semibold mb-4">AI Risk Dashboard</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Example input</Label>
                <Input placeholder="Type something" />
              </div>
              <div>
                <Label>Example textarea</Label>
                <Textarea placeholder="Details..." />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Slider />
              <Button>Run</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
