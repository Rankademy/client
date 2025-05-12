"use client"

import { Check } from "lucide-react"

interface SaveButtonProps {
  isEditing: boolean
  onSave: () => void
}

export default function SaveButton({ isEditing, onSave }: SaveButtonProps) {
  if (!isEditing) return null

  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={onSave}
        className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
      >
        <Check size={18} />
        <span>저장하기</span>
      </button>
    </div>
  )
}
