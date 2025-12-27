const avatars = Array.from(
  { length: 8 },
  (_, i) => `/avatars/IMG${i.toString().padStart(2, '0')}.jpg`
)

export default function AvatarCloud() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-10
          place-items-center
        "
      >
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Community member"
            className="
              h-24 w-24
              md:h-28 md:w-28
              rounded-full
              object-cover
              border border-green-300
              shadow-md
              bg-white
            "
          />
        ))}
      </div>
    </div>
  )
}
