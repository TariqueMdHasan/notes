function ReviewCard({ name, role, avatar, text }) {
  return (
    <div className="w-80 bg-white rounded-2xl p-6 shadow-sm flex-shrink-0">
      <div className="flex items-center gap-3 mb-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
            {name[0]}
          </div>
        )}

        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="text-yellow-400 mb-3">★★★★★</div>

      <p className="text-gray-700 text-sm leading-relaxed">
        “{text}”
      </p>
    </div>
  );
}

export default ReviewCard;
