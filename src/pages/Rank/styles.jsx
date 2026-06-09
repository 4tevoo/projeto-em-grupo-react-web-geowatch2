import styled, { keyframes, css } from 'styled-components';

const COLORS = {
  bg:       '#1a0d35',
  surface:  '#2a1550',
  surface2: '#3a1f6a',
  red:      '#B71813',
  white:    '#FEFFFE',
  gold:     '#E6B43C',
  green:    '#22D57F',
  purple:   '#4A2399',
  muted:    '#a08cc0',
};

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(230,180,60,0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(230,180,60,0); }
`;

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  height: 100vh;
  background: ${COLORS.bg};
  color: ${COLORS.white};
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  position: relative;
  overflow-y: auto;
`;

export const GridBg = styled.div`
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(74,35,153,0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74,35,153,0.2) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  z-index: 0;
`;

export const GlowOrb = styled.div`
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
  ${({ top, left, right, color }) => css`
    top: ${top};
    left: ${left};
    right: ${right};
    background: ${color};
    opacity: 0.18;
  `}
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 24px 80px;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 56px;
  animation: ${fadeUp} 0.6s ease both;
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${COLORS.green};
  border: 1px solid rgba(34,213,127,0.35);
  border-radius: 4px;
  padding: 4px 12px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, ${COLORS.white} 30%, ${COLORS.green} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const Subtitle = styled.p`
  margin-top: 12px;
  color: ${COLORS.muted};
  font-size: 15px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 0;
  color: ${COLORS.muted};
`;

export const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 3px solid rgba(34,213,127,0.15);
  border-top-color: ${COLORS.green};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const ErrorMsg = styled.p`
  color: #f87171;
  font-size: 14px;
  text-align: center;
`;

export const RetryBtn = styled.button`
  background: rgba(183,24,19,0.15);
  border: 1px solid rgba(183,24,19,0.4);
  color: #f87171;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: rgba(183,24,19,0.3); }
`;

export const PodiumRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 48px;
`;

export const PodiumCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: ${({ $delay }) => $delay}s;

  ${({ $rank }) => $rank === 1 && css`order: 2; margin-bottom: 24px;`}
  ${({ $rank }) => $rank === 2 && css`order: 1;`}
  ${({ $rank }) => $rank === 3 && css`order: 3;`}
`;

export const PodiumAvatar = styled.div`
  width: ${({ $rank }) => $rank === 1 ? '72px' : '56px'};
  height: ${({ $rank }) => $rank === 1 ? '72px' : '56px'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $rank }) => $rank === 1 ? '20px' : '15px'};
  font-weight: 800;
  color: ${COLORS.bg};
  animation: ${({ $rank }) => $rank === 1 ? css`${pulse} 2s ease-in-out infinite` : 'none'};

  ${({ $rank }) => $rank === 1 && css`background: ${COLORS.gold};`}
  ${({ $rank }) => $rank === 2 && css`background: ${COLORS.muted};`}
  ${({ $rank }) => $rank === 3 && css`background: ${COLORS.red};`}
`;

export const PodiumCrown = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
`;

export const PodiumName = styled.div`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  max-width: 90px;
  color: ${COLORS.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PodiumPoints = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${COLORS.green};
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;

export const PodiumBase = styled.div`
  margin-top: 12px;
  width: ${({ $rank }) => $rank === 1 ? '100px' : '80px'};
  height: ${({ $rank }) => $rank === 1 ? '64px' : $rank === 2 ? '48px' : '32px'};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;

  ${({ $rank }) => $rank === 1 && css`
    background: rgba(230,180,60,0.15);
    border: 1px solid rgba(230,180,60,0.35);
    color: ${COLORS.gold};
  `}
  ${({ $rank }) => $rank === 2 && css`
    background: rgba(160,140,192,0.12);
    border: 1px solid rgba(160,140,192,0.25);
    color: ${COLORS.muted};
  `}
  ${({ $rank }) => $rank === 3 && css`
    background: rgba(183,24,19,0.15);
    border: 1px solid rgba(183,24,19,0.35);
    color: ${COLORS.red};
  `}
`;

export const TableWrap = styled.div`
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr 130px 110px 110px;
  padding: 12px 20px;
  background: rgba(74,35,153,0.15);
  border-bottom: 1px solid rgba(255,255,255,0.06);

  @media (max-width: 600px) {
    grid-template-columns: 44px 1fr 100px;
  }
`;

export const ThCell = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${COLORS.muted};

  &:nth-child(n+3) { text-align: right; }

  @media (max-width: 600px) {
    &:nth-child(4), &:nth-child(5) { display: none; }
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr 130px 110px 110px;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.2s;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ $delay }) => $delay}s;

  &:last-child { border-bottom: none; }
  &:hover { background: rgba(74,35,153,0.1); }

  @media (max-width: 600px) {
    grid-template-columns: 44px 1fr 100px;
  }
`;

export const RankCell = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #5a4080;
  font-variant-numeric: tabular-nums;
`;

export const BadgeIcon = styled.span`
  font-size: 18px;
`;

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${COLORS.surface2};
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: ${COLORS.muted};
  flex-shrink: 0;
`;

export const PlayerName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.white};
`;

export const StatCell = styled.div`
  text-align: right;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  font-weight: ${({ $bold }) => $bold ? '700' : '400'};
  color: ${({ $accent }) => $accent ? COLORS.green : COLORS.muted};

  @media (max-width: 600px) {
    &.hide-mobile { display: none; }
  }
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FilterLabel = styled.span`
  font-size: 12px;
  color: ${COLORS.muted};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const SortBtn = styled.button`
  background: ${({ $active }) => $active ? 'rgba(74,35,153,0.4)' : 'rgba(255,255,255,0.04)'};
  border: 1px solid ${({ $active }) => $active ? 'rgba(74,35,153,0.8)' : 'rgba(255,255,255,0.1)'};
  color: ${({ $active }) => $active ? COLORS.white : COLORS.muted};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.04em;

  &:hover { border-color: rgba(74,35,153,0.6); color: ${COLORS.white}; }
`;