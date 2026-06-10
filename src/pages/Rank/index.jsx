import { useState, useEffect } from 'react';
import { SORT_OPTIONS, BADGE_MAP, getInitials } from './constants.js';
import { pontuacaoService } from '../../services/pontuacaoService';
import {
  Wrapper, GridBg, GlowOrb, Content,
  PageHeader, Tag, Title, Subtitle,
  Center, Spinner, ErrorMsg, RetryBtn,
  PodiumRow, PodiumCard, PodiumAvatar, PodiumAvatarImg, PodiumCrown,
  PodiumName, PodiumPoints, PodiumBase,
  FilterRow, FilterLabel, BtnGroup, SortBtn,
  TableWrap, TableHeader, ThCell,
  Row, RankCell, BadgeIcon, PlayerInfo,
  Avatar, AvatarImg, PlayerName, StatCell,
} from './styles.jsx';

export default function RankingPage() {
  const [rawPlayers, setRawPlayers] = useState([]);
  const [players, setPlayers]       = useState([]);
  const [sortBy, setSortBy]         = useState('pontos');
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  const fetchRanking = async () => {
    setLoading(true);
    setError(null);
    try {
      const [{ data: partidas }, { data: usuarios }] = await Promise.all([
        pontuacaoService.getRanking(),
        pontuacaoService.getUsuarios(),
      ]);

      const pontosTratados = partidas.map(pt => {
        const usuario = usuarios.find(u => u.id === pt.idUsuario);
        const totalPontos = pt.pontos.reduce((acc, val) => acc + val, 0);
        const melhorRodada = pt.pontos.length > 0 ? Math.max(...pt.pontos) : 0;
        return {
          ...pt,
          userName:  usuario?.nome ?? pt.nomeUsuario,
          avatarURL: usuario?.avatarURL ?? null,
          pontos:    totalPontos,
          recorde:   melhorRodada,
        };
      });

      const semDuplicatas = Object.values(
        pontosTratados.reduce((acc, p) => {
          if (!acc[p.idUsuario]) {
            acc[p.idUsuario] = p;
          } else {
            if (p.pontos > acc[p.idUsuario].pontos) {
              acc[p.idUsuario] = p;
            }
          }
          return acc;
        }, {})
      );

      setRawPlayers(semDuplicatas.slice(0, 50));
    } catch (err) {
      setError('Não foi possível carregar o ranking. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRanking(); }, []);

  useEffect(() => {
    if (!rawPlayers.length) return;
    const sorted = [...rawPlayers]
      .sort((a, b) => (b[sortBy] ?? 0) - (a[sortBy] ?? 0))
      .slice(0, 50);
    setPlayers(sorted);
  }, [rawPlayers, sortBy]);

  const top3 = [...players]
    .sort((a, b) => (b.pontos ?? 0) - (a.pontos ?? 0))
    .slice(0, 3);

  return (
    <Wrapper>
      <GridBg />
      <GlowOrb top="-200px" left="-200px"  color="radial-gradient(circle, #00ffb2, transparent)" />
      <GlowOrb top="40%"    right="-300px" color="radial-gradient(circle, #6366f1, transparent)" />

      <Content>
        <PageHeader>
          <Tag>🌍 Geowatch</Tag>
          <Title>Ranking Global</Title>
          <Subtitle>Classificação dos jogadores por pontuação total</Subtitle>
        </PageHeader>

        {loading && (
          <Center>
            <Spinner />
            <span>Carregando ranking...</span>
          </Center>
        )}

        {!loading && error && (
          <Center>
            <ErrorMsg>{error}</ErrorMsg>
            <RetryBtn onClick={fetchRanking}>Tentar novamente</RetryBtn>
          </Center>
        )}

        {!loading && !error && players.length > 0 && (
          <>
            {top3.length === 3 && (
              <PodiumRow>
                {[top3[1], top3[0], top3[2]].map((p, i) => {
                  const rank = i === 1 ? 1 : i === 0 ? 2 : 3;
                  return (
                    <PodiumCard key={p.id} $rank={rank} $delay={0.1 * i}>
                      {rank === 1 && <PodiumCrown>👑</PodiumCrown>}
                      {p.avatarURL
                        ? <PodiumAvatarImg src={p.avatarURL} $rank={rank} alt={p.userName} />
                        : <PodiumAvatar $rank={rank}>{getInitials(p.userName)}</PodiumAvatar>
                      }
                      <PodiumName>{p.userName?.split(' ')[0]}</PodiumName>
                      <PodiumPoints>
                        {(p.pontos ?? 0).toLocaleString('pt-BR')} pts
                      </PodiumPoints>
                      <PodiumBase $rank={rank}>{rank}</PodiumBase>
                    </PodiumCard>
                  );
                })}
              </PodiumRow>
            )}

            <FilterRow>
              <FilterLabel>Ordenar por</FilterLabel>
              <BtnGroup>
                {SORT_OPTIONS.map(opt => (
                  <SortBtn
                    key={opt.key}
                    $active={sortBy === opt.key}
                    onClick={() => setSortBy(opt.key)}
                  >
                    {opt.label}
                  </SortBtn>
                ))}
              </BtnGroup>
            </FilterRow>

            <TableWrap>
              <TableHeader>
                <ThCell>#</ThCell>
                <ThCell>Jogador</ThCell>
                <ThCell>Pontos</ThCell>
                <ThCell>Recorde</ThCell>
              </TableHeader>

              {players.map((p, idx) => (
                <Row key={p.id} $delay={0.03 * idx}>
                  <RankCell>
                    {idx < 3
                      ? <BadgeIcon>{BADGE_MAP[idx]}</BadgeIcon>
                      : `${idx + 1}°`
                    }
                  </RankCell>

                  <PlayerInfo>
                    {p.avatarURL
                      ? <AvatarImg src={p.avatarURL} alt={p.userName} />
                      : <Avatar>{getInitials(p.userName)}</Avatar>
                    }
                    <PlayerName>{p.userName}</PlayerName>
                  </PlayerInfo>

                  <StatCell $bold $accent>
                    {(p.pontos ?? 0).toLocaleString('pt-BR')}
                  </StatCell>

                  <StatCell className="hide-mobile">
                    {p.recorde ?? '—'}
                  </StatCell>
                </Row>
              ))}
            </TableWrap>
          </>
        )}

        {!loading && !error && players.length === 0 && (
          <Center>
            <span>Nenhum jogador no ranking ainda.</span>
          </Center>
        )}
      </Content>
    </Wrapper>
  );
}