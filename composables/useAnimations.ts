export const useAnimations = () => {
  const hasHeroPlayed = useState('hasHeroPlayed', () => false)

  const markHeroPlayed = () => {
    hasHeroPlayed.value = true
  }

  return {
    hasHeroPlayed,
    markHeroPlayed
  }
}
