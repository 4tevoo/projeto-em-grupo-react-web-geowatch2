import styled, { keyframes, css } from 'styled-components';

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(251, 191, 36, 0); }
`;

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #050a14;
  color: #e2e8f0;
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  position: relative;
  overflow-x: hidden;

  &::after {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,255,200,0.015) 2px,
      rgba(0,255,200,0.015) 4px
    );
    pointer-events: none;
    z-index: 0;
  }
`;

export const GridBg = styled.div`
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,255,180,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,180,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  z-index: 0;
`;

export const GlowOrb = styled.div`
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
  ${({ top, left, right, color }) => css`
    top: ${top};
    left: ${left};
    right: ${right};
    background: ${color};
    opacity: 0.15;
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
  color: #00ffb2;
  border: 1px solid rgba(0,255,178,0.35);
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
  background: linear-gradient(135deg, #ffffff 30%, #00ffb2 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const Subtitle = styled.p`
  margin-top: 12px;
  color: #64748b;
  font-size: 15px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 0;
  color: #475569;
`;

export const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 3px solid rgba(0,255,178,0.15);
  border-top-color: #00ffb2;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const ErrorMsg = styled.p`
  color: #f87171;
  font-size: 14px;
  text-align: center;
`;

export const RetryBtn = styled.button`
  background: rgba(248,113,113,0.1);
  border: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: rgba(248,113,113,0.2); }
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
  color: #050a14;
  animation: ${({ $rank }) => $rank === 1 ? css`${pulse} 2s ease-in-out infinite` : 'none'};

  ${({ $rank }) => $rank === 1 && css`background: linear-gradient(135deg, #fbbf24, #f59e0b);`}
  ${({ $rank }) => $rank === 2 && css`background: linear-gradient(135deg, #cbd5e1, #94a3b8);`}
  ${({ $rank }) => $rank === 3 && css`background: linear-gradient(135deg, #f97316, #ea580c);`}
`;

export const PodiumCrown = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
  filter: drop-shadow(0 0 8px rgba(251,191,36,0.7));
`;

export const PodiumName = styled.div`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  max-width: 90px;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PodiumPoints = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #00ffb2;
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
    background: linear-gradient(180deg,rgba(251,191,36,0.25),rgba(251,191,36,0.05));
    border: 1px solid rgba(251,191,36,0.3);
    color: #fbbf24;
  `}
  ${({ $rank }) => $rank === 2 && css`
    background: linear-gradient(180deg,rgba(148,163,184,0.15),rgba(148,163,184,0.03));
    border: 1px solid rgba(148,163,184,0.2);
    color: #94a3b8;
  `}
  ${({ $rank }) => $rank === 3 && css`
    background: linear-gradient(180deg,rgba(249,115,22,0.15),rgba(249,115,22,0.03));
    border: 1px solid rgba(249,115,22,0.2);
    color: #f97316;
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
  background: rgba(0,255,178,0.04);
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
  color: #475569;

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
  &:hover { background: rgba(0,255,178,0.04); }

  @media (max-width: 600px) {
    grid-template-columns: 44px 1fr 100px;
  }
`;

export const RankCell = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #334155;
  font-variant-numeric: tabular-nums;
`;

export const BadgeIcon = styled.span`
  font-size: 18px;
  filter: drop-shadow(0 0 6px rgba(251,191,36,0.5));
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
  background: linear-gradient(135deg, #1e293b, #334155);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: #94a3b8;
  flex-shrink: 0;
`;

export const PlayerName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
`;

export const StatCell = styled.div`
  text-align: right;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  font-weight: ${({ $bold }) => $bold ? '700' : '400'};
  color: ${({ $accent }) => $accent ? '#00ffb2' : '#64748b'};

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
  color: #475569;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const SortBtn = styled.button`
  background: ${({ $active }) => $active ? 'rgba(0,255,178,0.12)' : 'rgba(255,255,255,0.04)'};
  border: 1px solid ${({ $active }) => $active ? 'rgba(0,255,178,0.4)' : 'rgba(255,255,255,0.08)'};
  color: ${({ $active }) => $active ? '#00ffb2' : '#64748b'};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.04em;

  &:hover { border-color: rgba(0,255,178,0.3); color: #e2e8f0; }
`;
